import { sagarScenarios } from '../lib/sagar/sagar-scenarios';
import { validateResponseCoverage } from '../lib/sagar/sagar-scenarios';

try {
  validateResponseCoverage(sagarScenarios);
  console.log('✅ All scenarios validated successfully!');
  process.exit(0);
} catch (error) {
  console.error('❌ Scenario validation failed:');
  console.error(error);
  process.exit(1);
} 