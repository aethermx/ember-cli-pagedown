module.exports = {
  description: ''

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
    return this.addBowerPackageToProject('pagedown',
      'ujifgc/pagedown#f1ae0f5626e044f64b937836962a9941c60c7596');
  }
};
