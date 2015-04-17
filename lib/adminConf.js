AdminConfig = {
  name: 'Pollit',
  adminEmails: ['admin@admin.com'],
  collections: {
    Polls: {
      tableColumns: [
        {label: 'Name', name: 'name'}
      ],
      auxCollections: ['Tags']
    },
    Tags: {
      tableColumns: [
        {label: 'Tag', name: 'name'}
      ]
    }
  }
};