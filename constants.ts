// FIX: Import new types for sign categories.
import { LawCategory, LawCategoryId, Category, CategoryId } from './types';

export const LAW_CATEGORIES: LawCategory[] = [
  { id: LawCategoryId.BEHAVIOR, name: 'Uburyo bwo Gutwara', icon: 'fa-car' },
  { id: LawCategoryId.SPEED, name: 'Umuvuduko', icon: 'fa-tachometer-alt' },
  { id: LawCategoryId.POSITIONING, name: 'Imyanya mu Muhanda', icon: 'fa-road' },
  { id: LawCategoryId.OVERTAKING, name: 'Gunyuranaho', icon: 'fa-car-side' },
  { id: LawCategoryId.PRIORITY, name: 'Gutanga Inzira', icon: 'fa-traffic-light' },
  { id: LawCategoryId.PENALTIES, name: 'Ibihano', icon: 'fa-gavel' },
];

// FIX: Add CATEGORIES constant for traffic sign categories.
export const CATEGORIES: Category[] = [
  { id: CategoryId.PROHIBITORY, name: 'Ibyapa byo Kubuza', icon: 'fa-ban' },
  { id: CategoryId.MANDATORY, name: 'Ibyapa Bitegeka', icon: 'fa-arrow-circle-right' },
  { id: CategoryId.WARNING, name: 'Ibyapa byo Kuburira', icon: 'fa-exclamation-triangle' },
  { id: CategoryId.INFORMATIONAL, name: 'Ibyapa by’Amakuru', icon: 'fa-info-circle' },
  { id: CategoryId.PRIORITY, name: 'Ibyapa by’Ingenzi', icon: 'fa-exclamation-circle' },
  { id: CategoryId.DIRECTIONAL, name: 'Ibyapa Biyobora', icon: 'fa-directions' },
];
