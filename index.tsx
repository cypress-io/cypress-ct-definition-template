import { getContainerEl, setupHooks } from "@cypress/mount-utils";
import { render } from "solid-js/web";

let dispose: () => void;

function cleanup() {
  dispose?.();
}

interface MountingOptions {
  log?: boolean;
}

export function mount(
  component: Parameters<typeof render>[0],
  options: MountingOptions = {}
) {
  // rendering/mounting function.
  const root = getContainerEl();

  // Render component with your library's relevant
  dispose = render(component, root);

  return cy.wait(0, { log: false }).then(() => {
    if (options.log !== false) {
      Cypress.log({
        name: "mount",
        message: "Mounted component",
      });
    }
  });
}

setupHooks(cleanup);
