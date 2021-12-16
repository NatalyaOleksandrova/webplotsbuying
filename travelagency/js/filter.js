var buttonFilter = {
  
  // Declare any variables we will need as properties of the object
  
  $filters: null,
  $submit: null,
  $reset: null,
  groups: [],
  outputArray: [],
  outputString: '',
  
  // The "init" method will run on document ready and cache any jQuery objects we will need.
  
  init: function(){
    var self = this; // As a best practice, in each method we will asign "this" to the variable "self" so that it remains scope-agnostic. We will use it to refer to the parent "buttonFilter" object so that we can share methods and properties between all parts of the object.
    
    self.$filters = $('#Filters');
    self.$reset = $('#Reset');
    self.$container = $('#Container');
    $selector= $('#Selector');
    self.$filters.find('fieldset').each(function(){
      var $this = $(this);
      
      self.groups.push({
        $buttons: $this.find('.filter-btn'),
        $butto: $this.find('.filter-btnv'),
       // $pricef: $this.find('.filter-btpri'),
        
        $dropdown: $this.find('select'),
        active: ''
      });
    });
    
    self.bindHandlers();
  },
  

 
  // The "bindHandlers" method will listen for whenever a button is clicked. 
  
  bindHandlers: function(){
    var self = this;
    
   
    
    // Handle dropdown change
    
    $('#Submit').on('click', function (e) {
      e.preventDefault();
      self.parseFilters();
      });	
      
    // Handle reset click
    
    self.$reset.on('click', function(e){
      e.preventDefault();
      self.$filters.find('select').val('');
      self.parseFilters();
    });
  },
  
  // The parseFilters method checks which filters are active in each group:
  
  parseFilters: function(){
    var self = this;
 
    // loop through each filter group and grap the active filter from each one.
    
    for(var i = 0, group; group = self.groups[i]; i++){
      group.active = group.$buttons.length ? 
        group.$buttons.filter('.active').attr('data-filter') || '' :
        group.$dropdown.val();
    }
    for(var i = 0, group; group = self.groups[i]; i++){
      group.active = group.$buttons.length ? 
        group.$buttons.filter('.active').attr('data-area') || '' :
        $selector.val();
    }
    for(var i = 0, group; group = self.groups[i]; i++){
      group.active = group.$buttons.length ? 
        group.$buttons.filter('.active').attr('data-price') || '' :
        group.$dropdown.val();
    }
    //for(var i = 0, group; group = self.groups[i]; i++){
     // group.active = group.$buttons.length ? 
       // group.$butto.filter('.active').attr('data-area') || '' :
       // group.$dropdown.val();
   // }
    //for(var i = 0, group; group = self.groups[i]; i++){
     // group.active = group.$buttons.length ? 
       // group.$pricef.filter('.active').attr('data-price') || '' :
        //group.$dropdown.val();
    //}
    //for(var i = 0, group; group = self.groups[i]; i++){
      //group.active = group.$buttons.length ? 
        //group.$pri.filter('.active').attr('data-price') || '' :
        //group.$dropdown.val();
    //}
    self.concatenate();
  },
  
  // The "concatenate" method will crawl through each group, concatenating filters as desired:
  
  concatenate: function(){
    var self = this;
    
    self.outputString = ''; // Reset output string
    
    for(var i = 0, group; group = self.groups[i]; i++){
      self.outputString += group.active;
    }
    
    // If the output string is empty, show all rather than none:
    
    !self.outputString.length && (self.outputString = 'all'); 
    
    console.log(self.outputString); 
    
    // ^ we can check the console here to take a look at the filter string that is produced
    
    // Send the output string to MixItUp via the 'filter' method:
    
      if(self.$container.mixItUp('isLoaded')){
        self.$container.mixItUp('filter', self.outputString);
      }
  }
};
  
// On document ready, initialise our code.

$(function(){

  // Initialize buttonFilter code
      
  buttonFilter.init();
      
  // Instantiate MixItUp
      
  $('#Container').mixItUp({
      selectors: {filter: 'filter-btn'},
     selectors: {filter: 'filter-btnv'},
      // selectors: {filter: 'filter-btpri'},
      
      pagination: {
        limit: 3
      },
      controls: {
        enable: true //default
      },
      callbacks: {
        onMixFail: function(){
          alert('No items were found matching the selected filters.');
        }
      }
    }); (jQuery)
    });
  
