export function initialize(container, application) {
  application.inject('view', 'pagedownService', 'service:pagedown');
}

export default {
  name: 'pagedown-service',
  initialize: initialize
};
