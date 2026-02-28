module.exports = {
  // Only release from this branch
  branches: ["main"],

  plugins: [
    // Analyze commit messages to determine version bump
    "@semantic-release/commit-analyzer",

    // Generate release notes based on commits
    "@semantic-release/release-notes-generator",

    // Update or generate a changelog file
    ["@semantic-release/changelog", { changelogFile: "CHANGELOG.md" }],

    // Publish the package to npm
    "@semantic-release/npm",

    // Create a GitHub Release and upload assets
    [
      "@semantic-release/github",
      {
        // List of assets to attach to the GitHub release
        assets: [
          { path: "dist/*.tgz", label: "Distribution Tarball" },
          { path: "CHANGELOG.md", label: "Changelog" }
        ]
      }
    ],

    // Commit version/changelog back to the repo (optional)
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "CHANGELOG.md"],
        message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ]
  ]
};
