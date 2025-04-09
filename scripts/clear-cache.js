#!/usr/bin/env node

require("dotenv").config();
const { execSync } = require("child_process");

const distributionId = process.env.CLOUDFRONT_DISTRIBUTION_ID;

if (!distributionId) {
  console.error(
    "Error: CLOUDFRONT_DISTRIBUTION_ID is not defined in .env file"
  );
  process.exit(1);
}

try {
  const command = `aws cloudfront create-invalidation --distribution-id ${distributionId} --paths "/*"`;
  console.log(`Executing: ${command}`);

  const output = execSync(command, { encoding: "utf8" });
  console.log(output);

  console.log("Cache invalidation request sent successfully!");
} catch (error) {
  console.error("Error executing AWS CLI command:", error.message);
  process.exit(1);
}
