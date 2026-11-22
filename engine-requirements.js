const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 22 || major > 24) {
  console.error(
    `\n❌ This package requires Node.js 22, 23, or 24 to run reliably.\n` +
    `   You are using Node.js ${process.versions.node}.\n` +
    `   Please upgrade/downgrade to Node.js 22–24 to proceed.\n`
  );
  process.exit(1);
}
