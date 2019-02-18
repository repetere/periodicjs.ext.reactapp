// import { Platform, } from 'react-native';
import { browserHistory, hashHistory, createMemoryHistory, } from 'react-router';
import { syncHistoryWithStore, } from 'react-router-redux';

export const historySettings = { browserHistory, hashHistory, createMemoryHistory, };

export  function getHistory(historySettings, AppConfigSettings, store)  {
  // if(Platform.OS === 'web') {
  return syncHistoryWithStore(historySettings[  AppConfigSettings.routerHistory ], store);
  // } else{ 
  //   return createMemoryHistory(store);
  // }
}
  