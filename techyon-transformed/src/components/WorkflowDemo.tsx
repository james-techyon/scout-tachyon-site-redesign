import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TechyonIcons } from "@/components/TechyonIcons";

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  duration: number;
  status: 'pending' | 'running' | 'complete';
}

interface WorkflowDemoProps {
  type: 'automation' | 'ai' | 'integration' | 'data' | 'consulting';
}

const workflowConfigs = {
  automation: {
    title: "RPA Workflow Automation",
    steps: [
      { id: '1', title: 'Document Intake', description: 'Automatically capture incoming documents', icon: TechyonIcons.DocumentProcessing, duration: 2000, status: 'pending' as const },
      { id: '2', title: 'Data Extraction', description: 'Extract key information using AI', icon: TechyonIcons.AIProcessing, duration: 3000, status: 'pending' as const },
      { id: '3', title: 'Validation & Processing', description: 'Validate data accuracy and format', icon: TechyonIcons.Validation, duration: 2500, status: 'pending' as const },
      { id: '4', title: 'System Integration', description: 'Update records in target systems', icon: TechyonIcons.SystemSync, duration: 1500, status: 'pending' as const }
    ]
  },
  ai: {
    title: "AI Document Processing",
    steps: [
      { id: '1', title: 'Document Analysis', description: 'AI scans document structure', icon: TechyonIcons.DocumentProcessing, duration: 1500, status: 'pending' as const },
      { id: '2', title: 'Content Classification', description: 'Categorize document type', icon: TechyonIcons.AIProcessing, duration: 2000, status: 'pending' as const },
      { id: '3', title: 'Data Extraction', description: 'Extract relevant information', icon: TechyonIcons.DataIntelligence, duration: 2500, status: 'pending' as const },
      { id: '4', title: 'Quality Assurance', description: 'Validate extracted data', icon: TechyonIcons.Validation, duration: 1000, status: 'pending' as const }
    ]
  },
  integration: {
    title: "System Integration Demo",
    steps: [
      { id: '1', title: 'API Connection', description: 'Establish secure connections', icon: TechyonIcons.Integration, duration: 1000, status: 'pending' as const },
      { id: '2', title: 'Data Mapping', description: 'Map fields between systems', icon: TechyonIcons.ProcessFlow, duration: 2000, status: 'pending' as const },
      { id: '3', title: 'Sync Process', description: 'Transfer data seamlessly', icon: TechyonIcons.SystemSync, duration: 3000, status: 'pending' as const },
      { id: '4', title: 'Verification', description: 'Confirm successful integration', icon: TechyonIcons.Validation, duration: 1500, status: 'pending' as const }
    ]
  },
  data: {
    title: "Predictive Analytics Engine",
    steps: [
      { id: '1', title: 'Data Collection', description: 'Gather historical data', icon: TechyonIcons.DataIntelligence, duration: 2000, status: 'pending' as const },
      { id: '2', title: 'Pattern Analysis', description: 'Identify trends and patterns', icon: TechyonIcons.Analytics, duration: 3500, status: 'pending' as const },
      { id: '3', title: 'Model Training', description: 'Train predictive models', icon: TechyonIcons.AIProcessing, duration: 4000, status: 'pending' as const },
      { id: '4', title: 'Insights Generation', description: 'Generate actionable insights', icon: TechyonIcons.Success, duration: 2000, status: 'pending' as const }
    ]
  },
  consulting: {
    title: "Digital Transformation Assessment",
    steps: [
      { id: '1', title: 'Current State Analysis', description: 'Evaluate existing processes', icon: TechyonIcons.Analytics, duration: 2500, status: 'pending' as const },
      { id: '2', title: 'Gap Identification', description: 'Identify improvement opportunities', icon: TechyonIcons.ProcessFlow, duration: 3000, status: 'pending' as const },
      { id: '3', title: 'Solution Design', description: 'Design optimal automation strategy', icon: TechyonIcons.StrategyConsulting, duration: 3500, status: 'pending' as const },
      { id: '4', title: 'Implementation Plan', description: 'Create detailed roadmap', icon: TechyonIcons.Success, duration: 2000, status: 'pending' as const }
    ]
  }
};

export function WorkflowDemo({ type }: WorkflowDemoProps) {
  const config = workflowConfigs[type];
  const [steps, setSteps] = useState<WorkflowStep[]>(config.steps);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const startDemo = () => {
    setIsRunning(true);
    setCurrentStep(0);
    setProgress(0);
    setSteps(config.steps.map(step => ({ ...step, status: 'pending' })));
  };

  const resetDemo = () => {
    setIsRunning(false);
    setCurrentStep(0);
    setProgress(0);
    setSteps(config.steps.map(step => ({ ...step, status: 'pending' })));
  };

  useEffect(() => {
    if (!isRunning || currentStep >= steps.length) {
      if (currentStep >= steps.length) {
        setIsRunning(false);
      }
      return;
    }

    const currentStepConfig = steps[currentStep];
    setSteps(prev => prev.map((step, index) => 
      index === currentStep ? { ...step, status: 'running' } : step
    ));

    const timer = setTimeout(() => {
      setSteps(prev => prev.map((step, index) => 
        index === currentStep ? { ...step, status: 'complete' } : step
      ));
      setCurrentStep(prev => prev + 1);
      setProgress(((currentStep + 1) / steps.length) * 100);
    }, currentStepConfig.duration);

    return () => clearTimeout(timer);
  }, [isRunning, currentStep, steps.length]);

  return (
    <Card className="w-full max-w-2xl animate-reveal animate-morph">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6 animate-slide-up">
          <h3 className="text-lg font-semibold animate-typing">{config.title}</h3>
          <div className="flex gap-2 animate-fade-in animate-stagger-delay-1">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={startDemo}
              disabled={isRunning}
              className="group animate-button-press animate-magnetic hover:animate-glow"
            >
              <TechyonIcons.Play className={`w-3 h-3 mr-1 transition-transform group-hover:scale-110 ${isRunning ? 'animate-loading-pulse' : ''}`} />
              {isRunning ? 'Running...' : 'Start Demo'}
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={resetDemo}
              className="group animate-button-press animate-magnetic hover:animate-glow"
            >
              <TechyonIcons.Restart className="w-3 h-3 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={step.id} 
                className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-500 animate-slide-up ${
                  step.status === 'running' 
                    ? 'bg-primary/10 border border-primary/20 animate-glow animate-loading-pulse' 
                    : step.status === 'complete' 
                    ? 'bg-green-50 border border-green-200 animate-success-bounce' 
                    : 'bg-muted/30 hover:bg-muted/50'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                  step.status === 'running' 
                    ? 'bg-primary text-primary-foreground animate-loading-pulse animate-glow' 
                    : step.status === 'complete' 
                    ? 'bg-green-500 text-white animate-success-bounce' 
                    : 'bg-muted text-muted-foreground hover:scale-110'
                }`}>
                  {step.status === 'complete' ? (
                    <TechyonIcons.Success className="w-4 h-4 animate-elastic" />
                  ) : step.status === 'running' ? (
                    <TechyonIcons.ProcessFlow className="w-4 h-4 animate-spin animate-glow" />
                  ) : (
                    <IconComponent className="w-4 h-4 hover:animate-bounce transition-transform" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className={`font-medium text-sm transition-colors ${
                      step.status === 'running' ? 'text-primary animate-text-shimmer' :
                      step.status === 'complete' ? 'text-green-700' : ''
                    }`}>{step.title}</h4>
                    {step.status === 'running' && (
                      <Badge variant="secondary" className="text-xs animate-loading-pulse animate-sparkle">Processing</Badge>
                    )}
                    {step.status === 'complete' && (
                      <Badge variant="secondary" className="text-xs bg-green-100 text-green-800 animate-success-bounce animate-sparkle">Complete</Badge>
                    )}
                  </div>
                  <p className={`text-xs text-muted-foreground transition-opacity ${
                    step.status === 'running' ? 'animate-loading-pulse' : ''
                  }`}>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="space-y-2 animate-slide-up animate-stagger-delay-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Overall Progress</span>
            <span className={`font-medium transition-all duration-300 ${
              isRunning ? 'animate-metric-counter text-primary' : ''
            }`}>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className={`h-2 transition-all duration-500 ${
            isRunning ? 'animate-progress-fill' : ''
          }`} />
        </div>

        {!isRunning && progress === 100 && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg animate-reveal animate-success-bounce animate-glow animate-sparkle">
            <div className="flex items-center text-green-800">
              <TechyonIcons.Success className="w-4 h-4 mr-2 animate-elastic animate-wave" />
              <span className="text-sm font-medium animate-typing">Automation Complete!</span>
            </div>
            <p className="text-xs text-green-600 mt-1 animate-fade-in animate-stagger-delay-1">
              Process completed successfully with 99.2% accuracy
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}