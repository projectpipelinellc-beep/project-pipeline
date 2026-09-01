import type { LucideIcon } from "lucide-react";
import {
  HardHat,
  Trees,
  Wrench,
  Sparkles,
  Car,
  Scissors,
  Briefcase,
  Building2,
} from "lucide-react";

export type Industry = {
  name: string;
  icon: LucideIcon;
};

export const industries: Industry[] = [
  { name: "Construction", icon: HardHat },
  { name: "Landscaping", icon: Trees },
  { name: "Home Services", icon: Wrench },
  { name: "Cleaning", icon: Sparkles },
  { name: "Automotive", icon: Car },
  { name: "Salons & Beauty", icon: Scissors },
  { name: "Professional Services", icon: Briefcase },
  { name: "Local Businesses", icon: Building2 },
];
