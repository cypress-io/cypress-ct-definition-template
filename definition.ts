import { defineComponentFramework } from "cypress";

const dep: Cypress.CypressComponentDependency = {
  // Unique, semantic identifier.
  type: "template-name",

  // Human readable name.
  name: "Dependency Name",

  // Package name install from `npm`.
  package: "dependency-name",

  /**
   * Similar to package, but can include a version or tag.
   * Used during setup to generate an install command for users.
   * Eg: `solid-js@next`
   */
  installer: "dependency-name@^1.0.0",

  // Human readable description.
  description: "A required dependency for this project",

  // Minimum supported version.
  minVersion: "^1.0.0",
};

/**
 * The definition.
 */
export default defineComponentFramework({
  /**
   * This should match the `npm` package name.
   * The convention required to ensure your Definition is processed
   * by Cypress is `cypress-ct-*` for global packages, or
   * `@org/cypress-ct-*` for organization level packages.
   */
  type: "cypress-ct-template",

  /**
   * The label that shows up when configuring Component Testing
   * for the first time.
   */
  name: "Example Dependency",

  /**
   * Supported bundlers. Can be "webpack" and/or "vite".
   */
  supportedBundlers: ["vite", "webpack"],

  /**
   * Used by Cypress to automatically detect the correct Framework Definition
   * based on the user's project.
   * In this example, if a module matching `solidDep`
   * is found in the user's project,
   * Solid.js will automatically be selected when configuring Component Testing.
   */
  detectors: [dep],

  /**
   * Optionally, some conditional logic, based on whether
   * the user selected Vite or webpack.
   */
  dependencies: (bundler) => {
    return [dep];
  },
});
