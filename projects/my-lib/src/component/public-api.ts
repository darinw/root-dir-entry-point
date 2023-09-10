import { getVersion } from '../shared/public-api';

export class SomeComponent {
  version = getVersion();
}

export { getVersion };
