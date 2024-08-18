
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


## Overview

This application allows users to upload and manage coursework files, view evaluations, and explore different coursework categories. It includes features for drag-and-drop file uploads, manual file uploads, and storing file data in browser local storage. Users can view and interact with coursework details, including evaluation scores and breakdowns.

## Features

1. **Manual file upload option is also provided.**:

2. **File Size Limit**:
   - Files are limited to a maximum size of 25 MB.

3. **Local Storage Implementation**:
   - Uploaded files and their metadata are saved in the browser's local storage.
   - Data persists across page reloads.
   - Efficient retrieval of stored files and metadata.

4. **Coursework Details Form**:
   - Dropdowns for "Coursework Type" and "Subject".
   - Text input for the essay title.
   - Form data is stored locally with the associated file.

5. **Evaluation Display**:
   - Displays overall score with a circular progress indicator.
   - Breakdown of scores by criteria (A, B, C) and evaluation date.
   - Results are stored and retrieved locally.

6. **Coursework List**:
   - Displays previously uploaded coursework from local storage.
   - Shows title, subject, word count, and other relevant details for each item.

7. **Explore Coursework Section**:
   - Tabbed interface for different coursework categories.
   - Grid layout for coursework examples.


8. **Global State and MSW implementation**:
  