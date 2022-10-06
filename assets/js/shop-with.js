(function() {
    var $doc = $(document);
    var isDown = false;
  
    function bind() {
      $doc.mousedown(toggleDown);
      $doc.mouseup(toggleDown);
      $doc.on('mouseout', 'label', updateChildCheckboxes);
    }
  
    function toggleDown() {
      isDown = !isDown;
    }
  
    //assumes the "this" context is a jquery-extended DOM element
    function updateChildCheckboxes() {
      var $els = $(this).find('input[type="checkbox"]');
      check($els);
    }
  
    function check($elements) {
      if (isDown && $elements.prop('checked')) {
        $elements.prop('checked', false);
      } else if (isDown) {
        $elements.prop('checked', true);
      }
    }
  
    $(bind);
  }());
  
  //Also works if we append a checkbox after DOM ready
  (function() {
    $(function() {
      $('body').append('<div class="checkbox"> \
          <label> \
              <input type="checkbox">Last Item \
          </label> \
      </div>')
    });
  }());







  


  