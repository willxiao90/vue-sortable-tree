export const folderData = [
  {
    id: "root",
    label: "Documents",
    children: [
      {
        id: "projects",
        label: "Projects",
        children: [
          { id: "project-a", label: "Project A", children: [] },
          { id: "project-b", label: "Project B", children: [] },
          { id: "project-c", label: "Project C", children: [] },
        ],
      },
      {
        id: "personal",
        label: "Personal",
        children: [
          { id: "photos", label: "Photos", children: [] },
          { id: "videos", label: "Videos", children: [] },
          { id: "music", label: "Music", children: [] },
        ],
      },
      {
        id: "work",
        label: "Work",
        children: [
          { id: "reports", label: "Reports", children: [] },
          { id: "presentations", label: "Presentations", children: [] },
        ],
      },
    ],
  },
];
