import { initializeExtension, EnumTapisCoreService } from '@tapis/tapisui-extensions-core';

const icicleExtension = initializeExtension({
  multiTenantFeatures: false,
  authentication: {
    implicit: {
      authorizationPath: "v3/oauth2/authorize",
      clientId: "myclientid",
      redirectURI: "https://dev.develop.tapis.io/tapis-ui/#/oauth2/callback",
      responseType: "token"
    }
  },
  removeServices: [EnumTapisCoreService.Apps],
  mainSidebarServices: ["workflows", "pods", "ml-edge"],
  authMethods: ["implicit", "password"],
  logo: {
    logoText: "ICICLE"
  }
})

icicleExtension.registerService({
  id: "ml-edge",
  sidebarName: "ML Edge",
  icon: "share",
  component: "Hello from the extension library"
})

export {icicleExtension};