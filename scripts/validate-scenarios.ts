import { anthroScenarios } from '@/lib/sagar/anthro-scenarios';
import { controlScenarios } from '@/lib/sagar/control-scenarios';
import { validateResponseCoverage } from '../lib/utils';

try {
  validateResponseCoverage(controlScenarios);
  validateResponseCoverage(anthroScenarios);
  console.log('✅ All scenarios validated successfully!');
  process.exit(0);
} catch (error) {
  console.error('❌ Scenario validation failed:');
  console.error(error);
  process.exit(1);
} 