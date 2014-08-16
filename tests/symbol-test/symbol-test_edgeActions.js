/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'MySymbol'
   (function(symbolName) {   
   
   })("MySymbol");
   //Edge symbol end:'MySymbol'

   //=========================================================
   
   //Edge symbol: 'PartialSymbol'
   (function(symbolName) {   
   
   })("PartialSymbol");
   //Edge symbol end:'PartialSymbol'

   //=========================================================
   
   //Edge symbol: 'sym-full-manual'
   (function(symbolName) {   
   
   })("sym-full-manual");
   //Edge symbol end:'sym-full-manual'

   //=========================================================
   
   //Edge symbol: 'sym-partial'
   (function(symbolName) {   
   
   })("sym-partial-twice");
   //Edge symbol end:'sym-partial-twice'

   //=========================================================
   
   //Edge symbol: 'sym-looping'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         
         sym.play(0);

      });
      //Edge binding end

   })("sym-looping");
   //Edge symbol end:'sym-looping'

   //=========================================================
   
   //Edge symbol: 'sym-child'
   (function(symbolName) {   
   
   })("sym-child");
   //Edge symbol end:'sym-child'

   //=========================================================
   
   //Edge symbol: 'sym-grand-child'
   (function(symbolName) {   
   
   })("sym-grand-child");
   //Edge symbol end:'sym-grand-child'

   //=========================================================
   
   //Edge symbol: 'sym-partial'
   (function(symbolName) {   
   
   })("sym-partial");
   //Edge symbol end:'sym-partial'

   //=========================================================
   
   //Edge symbol: 'sym-reverse'
   (function(symbolName) {   
   
   })("sym-reverse");
   //Edge symbol end:'sym-reverse'

})(jQuery, AdobeEdge, "EDGE-126256608");