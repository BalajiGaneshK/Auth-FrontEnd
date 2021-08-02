import { useState } from 'react'
import { useEffect } from 'react';

const AlertComponent = (props) => {
    console.log("entered alert component");
    const [modalDisplay, setModalDisplay] = useState('none');
    useEffect(() => {
        if (props.shouldDisplay)
            setModalDisplay('block');
        else
            setModalDisplay('none');
        console.log("inside Alert component useEffect()");
        console.log("props.should display=", props.shouldDisplay);
        console.log("modalDisplay", modalDisplay);
    }, [ props.shouldDisplay])
    
    const closeModal = () => {
      setModalDisplay("none");
      props.setAlertProps({
        shouldDisplay: false
      });

      props.setFormDisplay({ 'display': 'block' });
      
    }

    
 
    
    return (
       
        <div>
        
        <div class="modal" tabindex="-1" role="dialog" style={{ display: modalDisplay, position:'absolute',top:'31%'}}>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{ props.modalContent.modalTitle}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => closeModal()}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
                <p>{ props.modalContent.modalBody}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => closeModal()}>Enter Again</button>
      </div>
    </div>
  </div>
</div>
        </div>
        
        
        )
    
    
}

export default AlertComponent;