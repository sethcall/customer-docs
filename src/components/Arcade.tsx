import React from "react";

/**
 * How to add to this:
 *
 * - In your arcade on app.arcade.software, click on arcade > share > copy code
 * - Paste the code somewhere and inspect for two values:
 *   - Arcade ID
 *   - bottom-padding
 * - Add both values below
 *
 */

export enum Clip {
  OktaIntegrationGuideCreateByndidRegisteredAttribute = "FpkNxrW9ynF3IZPOJ9aY",
  OktaIntegrationGuideUpdateByndidRegisteredAttribute = "ugWYLymXXcV2IAenTksk",
  OktaIntegrationGuideGroupCreation = "bsSTVqNn8EV6tZZbAyOC",
  OktaIntegrationGuideAPITokenGeneration = "PU4cOJiuF5yGTwms9iwY",
  OktaIntegrationGuideCreateOktaIdp = "3qtdBJu0hGFyXQJRMNdF",
  OktaIntegrationGuideCreateSCIMApplication = "VwTjovW4ax5ykrleAz2e",
  OktaIntegrationGuideConfigureSCIMApplication = "dJDWsQEPTpNfClpPeUuI",
  OktaIntegrationGuidePushGroupSCIMApplication = "cSIE0ESXc0gQ97NCsCcl",
  OktaIntegrationGuideRoutingRuleConfiguration = "LMmiu70U6Pt9yPvT6p4Z",
  IdentitiesAddId = "IN5DwUwqCNFN79fE7m7E",
  IdentitiesSelectId = "uXu2DWJnIGaT6bWmWGuS",
  IdentitiesAddPasskey = "X3d2DAvkEC0njEJfMWpS",
  IdentitiesSendEmail = "eCHsTZeCYT5RluBym27z",
  IdentitiesEditId = "PIM8rhVMC30oxdMZBMWk",
  IdentitiesBindingJobsTab = "6zut5SV0T9V80kDdSJj9",
  IdentityProviderIntegrationGuideGenericOIDC = "SxIsZ1rO8quip3aJx9c5",
  GroupsAddGroupCallout = "ZOGqnheQpo9C4tAywQOm",
  D360QueryLibrary = "aEZVxkl5OLL3Uxod4pCZ",
  D360CreateQueryFromExisting = "D8RKeOQr4fTMQTVYrGsc",
  CrowdStrikeIntegration = "XKmmOlte5oBTVAKjB874",
  Access360 = "TUr5Ta1lms4pAXrEqAMa",
  Device360 = "z9hyF8cHLKTwBns6WQ57",
  JamfIntegration = "aBqNcsOXYRZZ4EGM4D3s",
  RolesAddRole = "3Z7OXz9EfrDfqrhni5l5",
  RolesEditDeleteRole = "o7fubx589UlHR2VhJOCG",
  RolesAddIdentitytoRole = "CLRUbL4MV9ilGb09cGTU",
  RolesAddGrouptoRole = "0gX2fOfvNL98UB50Q4sC",
}

export const ClipPaddingBottom: { [key: string]: string } = {
  [Clip.OktaIntegrationGuideCreateByndidRegisteredAttribute]: "calc(50.520833333333336% + 41px)",
  [Clip.OktaIntegrationGuideUpdateByndidRegisteredAttribute]: "calc(50.520833333333336% + 41px)",
  [Clip.OktaIntegrationGuideGroupCreation]: "calc(50.520833333333336% + 41px)",
  [Clip.OktaIntegrationGuideAPITokenGeneration]: "calc(50.520833333333336% + 41px)",
  [Clip.IdentityProviderIntegrationGuideGenericOIDC]: "calc(50.520833333333336% + 41px)",
  [Clip.OktaIntegrationGuideCreateOktaIdp]: "calc(50.520833333333336% + 41px)",
  [Clip.IdentitiesAddId]: "calc(49.13098770665536% + 41px)",
  [Clip.IdentitiesSelectId]: "calc(71.4478417266187% + 41px)",
  [Clip.IdentitiesAddPasskey]: "calc(71.49280575539568% + 41px)",
  [Clip.IdentitiesSendEmail]: "calc(72.52697841726618% + 41px)",
  [Clip.IdentitiesEditId]: "calc(71.4478417266187% + 41px)",
  [Clip.IdentitiesBindingJobsTab]: "calc(71.4478417266187% + 41px)",
  [Clip.GroupsAddGroupCallout]: "calc(64.92805755395683% + 41px)",
  [Clip.OktaIntegrationGuideCreateSCIMApplication]: "calc(50.46296296296296% + 41px)",
  [Clip.OktaIntegrationGuideConfigureSCIMApplication]: "calc(50.46296296296296% + 41px)",
  [Clip.OktaIntegrationGuidePushGroupSCIMApplication]: "calc(50.46296296296296% + 41px)",
  [Clip.OktaIntegrationGuideRoutingRuleConfiguration]: "calc(50.520833333333336% + 41px)",
  [Clip.D360QueryLibrary]: "calc(48.96988906497623% + 41px)",
  [Clip.D360CreateQueryFromExisting]: "calc(51.38528138528139% + 41px)",
  [Clip.CrowdStrikeIntegration]: "calc(65.7042869641295% + 41px)",
  [Clip.Access360]: "calc(67.40107913669064% + 41px)",
  [Clip.Device360]: "calc(68.21043165467626% + 41px)",
  [Clip.JamfIntegration]: "calc(66.4568345323741% + 41px)",
  [Clip.RolesAddRole]: "calc(64.16366906474819% + 41px)",
  [Clip.RolesEditDeleteRole]: "calc(65.01798561151078% + 41px)",
  [Clip.RolesAddIdentitytoRole]: "calc(57.79194898365883% + 41px)",
  [Clip.RolesAddGrouptoRole]: "calc(57.79194898365883% + 41px)",
};

/**
 * Example Usage:
 *
 * import Arcade, {Clip} from '@site/src/components/Arcade.tsx';
 * <Arcade clip={Clip.OktaUserProfileUpdate} />
 *
 * Note:
 * clip must be one of the Clip enums above.
 */

interface ArcadeProps {
  clip: Clip;
}

const Arcade: React.FC<ArcadeProps> = ({ clip }) => {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: ClipPaddingBottom[clip],
        height: "0",
        width: "100%",
      }}
    >
      <iframe
        src={`https://demo.arcade.software/${clip}?embed&show_copy_link=true`}
        title="Okta API Token Generation"
        frameBorder="0"
        loading="lazy"
        allowFullScreen
        allow="clipboard-write"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          colorScheme: "light",
        }}
      ></iframe>
    </div>
  );
};

export default Arcade;