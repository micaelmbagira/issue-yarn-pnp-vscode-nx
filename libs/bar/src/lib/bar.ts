import { foo } from '@issue-yarn-pnp-vscode-nx/foo';
import { from } from 'rxjs';

export function bar(): string {
  return foo() + 'bar';
}

from([]);
