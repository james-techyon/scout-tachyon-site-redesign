import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// Custom automation-focused icons with consistent design language

export const AutomationIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M12 1V5M12 19V23M4.22 4.22L7.05 7.05M16.95 16.95L19.78 19.78M1 12H5M19 12H23M4.22 19.78L7.05 16.95M16.95 7.05L19.78 4.22" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const AIProcessingIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M7 12H17M12 7V17" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="8" cy="8" r="1" fill="currentColor"/>
    <circle cx="16" cy="8" r="1" fill="currentColor"/>
    <circle cx="8" cy="16" r="1" fill="currentColor"/>
    <circle cx="16" cy="16" r="1" fill="currentColor"/>
    <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" strokeWidth="0.8" opacity="0.6"/>
  </svg>
);

export const IntegrationIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M9 6H15M9 18H15M6 9V15M18 9V15" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const DataIntelligenceIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 12L7 8L13 14L21 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 6H17M21 6V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="2" y="16" width="4" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <rect x="8" y="14" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <rect x="14" y="18" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="4" cy="4" r="1" fill="currentColor"/>
    <circle cx="20" cy="4" r="1" fill="currentColor"/>
  </svg>
);

export const StrategyConsultingIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M8 10L16 14M16 10L8 14" stroke="currentColor" strokeWidth="0.8" opacity="0.6"/>
  </svg>
);

export const ProcessFlowIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="6" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <rect x="10" y="6" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <rect x="18" y="6" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M6 8H10M14 8H18" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 10V14H20V10" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="10" y="16" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M12 14V16" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="4" cy="8" r="1" fill="currentColor"/>
    <circle cx="12" cy="8" r="1" fill="currentColor"/>
    <circle cx="20" cy="8" r="1" fill="currentColor"/>
  </svg>
);

export const DocumentProcessingIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 12H16M8 16H13" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="10" cy="8" r="1" fill="currentColor"/>
    <path d="M12 6L14 8L18 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="7" y="18" width="2" height="2" rx="0.5" stroke="currentColor" strokeWidth="1" fill="none"/>
    <rect x="10" y="18" width="2" height="2" rx="0.5" stroke="currentColor" strokeWidth="1" fill="none"/>
    <rect x="13" y="18" width="2" height="2" rx="0.5" stroke="currentColor" strokeWidth="1" fill="none"/>
  </svg>
);

export const SystemSyncIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M21 16V8C21 6.9 20.1 6 19 6H5C3.9 6 3 6.9 3 8V16C3 17.1 3.9 18 5 18H19C20.1 18 21 17.1 21 16Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M7 12L17 12" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M14 9L17 12L14 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="7" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M3 6L21 6M3 18L21 18" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    <rect x="9" y="2" width="2" height="4" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
    <rect x="13" y="2" width="2" height="4" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
  </svg>
);

export const ValidationIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="6" r="1" fill="currentColor"/>
    <circle cx="18" cy="12" r="1" fill="currentColor"/>
    <circle cx="12" cy="18" r="1" fill="currentColor"/>
    <circle cx="6" cy="12" r="1" fill="currentColor"/>
  </svg>
);

export const AnalyticsIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 3V21H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 14L11 10L15 14L20 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="7" cy="14" r="1.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="11" cy="10" r="1.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="15" cy="14" r="1.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="20" cy="9" r="1.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <rect x="5" y="17" width="2" height="2" rx="0.5" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.3"/>
    <rect x="9" y="15" width="2" height="4" rx="0.5" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.3"/>
    <rect x="13" y="16" width="2" height="3" rx="0.5" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.3"/>
  </svg>
);

export const TimeSavedIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M12 6L12 12L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12H6M18 12H22" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 2V6M12 18V22" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M8.5 8.5L10 10M16 14L17.5 15.5" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
  </svg>
);

export const ROIIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M8 10L16 14" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="8" cy="10" r="1" fill="currentColor"/>
    <circle cx="16" cy="14" r="1" fill="currentColor"/>
    <path d="M10 8C10.5523 8 11 7.55228 11 7C11 6.44772 10.5523 6 10 6C9.44772 6 9 6.44772 9 7C9 7.55228 9.44772 8 10 8Z" fill="currentColor"/>
    <path d="M14 16C14.5523 16 15 15.5523 15 15C15 14.4477 14.5523 14 14 14C13.4477 14 13 14.4477 13 15C13 15.5523 13.4477 16 14 16Z" fill="currentColor"/>
    <path d="M2 2L6 6M18 18L22 22" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
  </svg>
);

export const AccuracyIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor"/>
    <path d="M8 4L16 20M20 8L4 16" stroke="currentColor" strokeWidth="0.8" opacity="0.3"/>
    <circle cx="12" cy="2" r="1" fill="currentColor" opacity="0.6"/>
    <circle cx="12" cy="22" r="1" fill="currentColor" opacity="0.6"/>
    <circle cx="2" cy="12" r="1" fill="currentColor" opacity="0.6"/>
    <circle cx="22" cy="12" r="1" fill="currentColor" opacity="0.6"/>
  </svg>
);

export const SuccessIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2L15 5M22 12L19 15M12 22L9 19M2 12L5 9" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
    <circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.3"/>
  </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="3" cy="6" r="1" fill="currentColor"/>
    <circle cx="3" cy="12" r="1" fill="currentColor"/>
    <circle cx="3" cy="18" r="1" fill="currentColor"/>
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
  </svg>
);

export const PlayIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M10 8L16 12L10 16V8Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor"/>
    <circle cx="12" cy="12" r="1" fill="background" stroke="currentColor" strokeWidth="0.5"/>
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
    <path d="M3 12H5" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
  </svg>
);

export const RestartIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M3 12C3 12 6 9 12 9C18 9 21 12 21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 7L21 12L16 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="1" fill="currentColor"/>
  </svg>
);

// Export all icons as a collection for easy access
export const TechyonIcons = {
  Automation: AutomationIcon,
  AIProcessing: AIProcessingIcon,
  Integration: IntegrationIcon,
  DataIntelligence: DataIntelligenceIcon,
  StrategyConsulting: StrategyConsultingIcon,
  ProcessFlow: ProcessFlowIcon,
  DocumentProcessing: DocumentProcessingIcon,
  SystemSync: SystemSyncIcon,
  Validation: ValidationIcon,
  Analytics: AnalyticsIcon,
  TimeSaved: TimeSavedIcon,
  ROI: ROIIcon,
  Accuracy: AccuracyIcon,
  Success: SuccessIcon,
  Menu: MenuIcon,
  Close: CloseIcon,
  Play: PlayIcon,
  ArrowRight: ArrowRightIcon,
  Restart: RestartIcon,
};