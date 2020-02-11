const truncate = (($) => {
    
    interface DataObject{
        LIMIT:string;
        MODULE:string;
    }

    const Data:DataObject = {
        LIMIT: 'data-truncate-limit',
        MODULE: 'truncate'
    }
    
    class truncate {
         _$element:HTMLElement;
        constructor ($element:HTMLElement){
            this._$element = $element;
            // let text = this._$element.innerHTML;
            constructor ($element, limit){
                
                console.log(this.sliceText());
                this._$element = $element;
                this._limit = limit;
                console.log(this.getText());
                
                this.init();
            }
            
            getText(){
                let text = this._$element.innerHTML;
                
                return text.slice(0,this._limit) + '...';
            }
            return text;
        }
        sliceText(){
            let sliceText = this.getText().slice(0,30);
            return sliceText;
        }
    }; 
    
    
    init(){
        
        
        
        $(document).ready(() => {
            $(`.truncate`).each((_index, element) => {
                new truncate(element);
                $(` [${Data.MODULE}]`).each((_index, element) => {
                    const $element = $(element);
                    const limit = $element.attr(Data.LIMIT);
                    new truncate(element, limit);
                });
            });
        })($)