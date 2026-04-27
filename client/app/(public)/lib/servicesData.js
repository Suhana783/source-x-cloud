export const servicesData = [
  {
    title: "Infrastructure Management / AMC",
    slug: "infrastructure-management",
  },
  {
    title: "Linux Infrastructure & Security",
    slug: "linux-infrastructure-security",
  },
  {
    title: "File / Backup / Storage Server",
    slug: "file-backup-storage",
    children: [
      { title: "Samba Backup Server", slug: "samba-backup" },
      { title: "UrBackup", slug: "urbackup" },
      { title: "Acronis", slug: "acronis" },
    ],
  },
  {
    title: "Securities / Firewall",
    slug: "security-firewall",
    children: [
      { title: "pfSense", slug: "pfsense" },
      { title: "Fortinet Firewall", slug: "fortinet" },
    ],
  },
];