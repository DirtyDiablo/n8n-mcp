window.BENCHMARK_DATA = {
  "lastUpdate": 1765211966590,
  "repoUrl": "https://github.com/DirtyDiablo/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "560e0c5b86d5e44a1537b7c3299cdc5aff3f645e",
          "message": "fix: pass context parameter to handleGetWorkflow in handleValidateWorkflow (#474) (#475)\n\nFixed n8n_validate_workflow tool failing in multi-tenant mode with error:\n\"n8n API not configured. Please set N8N_API_URL and N8N_API_KEY environment variables.\"\n\nRoot cause: handleValidateWorkflow called handleGetWorkflow without the context parameter.\n\nCloses #474\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2025-12-07T23:49:21+01:00",
          "tree_id": "07ce244e8e060e3c75a1207dcd2602aafb70d65b",
          "url": "https://github.com/DirtyDiablo/n8n-mcp/commit/560e0c5b86d5e44a1537b7c3299cdc5aff3f645e"
        },
        "date": 1765211966276,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      }
    ]
  }
}