module.exports = {
  description: 'Add the PageDown scripts.',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  normalizeEntityName: function() {
    // allows us to run ember -g ember-cli-bootswatch and not blow up
    // because ember cli normally expects the format
    // ember generate <entitiyName> <blueprint>
  },

  afterInstall: function(options) {
    /*TODO there is an issue:
      https://github.com/ember-cli/ember-cli/issues/3409

      until then, do manually:
      bower install --save git@github.com:ujifgc/pagedown.git#f1ae0f5626
     */

    //return this.addBowerPackageToProject('', 
    //  'git@github.com:ujifgc/pagedown.git#f1ae0f5626e044f64b937836962a9941c60c7596');
  }
};
