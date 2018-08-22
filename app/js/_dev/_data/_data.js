
function data() {

   // Variables
   var self = this;

   self.ajax = function(uri, method, data) {
      var request = {
         url: uri,
         type: method,
         accepts: "application/json",
         cache: false,
         dataType: "json",
         data: JSON.stringify(data),
         headers: {"X-Auth-Token": "5c8b70988e784fca8186b93d38b1bae7"},
         error: function (jqXHR) {
               console.log("ajax error " + jqXHR.status);
         }

      };

      return $.ajax(request);
   }

   dataFixture(self);
   dataLadder(self);
}