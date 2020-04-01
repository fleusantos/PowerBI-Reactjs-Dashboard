const embedTypes = ['report', 'dashboard'];

const defaultEmbedModes = ['view', 'edit', 'create'];

const defaultOptions = {
  report: {
    mode: 'view',
    embedModes: defaultEmbedModes,
  },
  dashboard: {
    mode: 'view',
    embedModes: defaultEmbedModes.filter(x => x != 'create'),
  },
};

const initializeState = type => ({
  embedType: type,
  tokenType: 'Embed',
  accessToken: '',
  embedUrl: '',
  embedId: '',
  pageName: '',
  dashboardId: '',
  permissions: 'All',
  filterPaneEnabled: 'filter-false',
  navContentPaneEnabled: 'nav-false',
  visualHeaderFlag: true,
  flag: false,
  reportMode: defaultOptions[type].mode,
  datasetId: '',
});

export {
  embedTypes,'
  defaultOptions,
  initializeState
};
