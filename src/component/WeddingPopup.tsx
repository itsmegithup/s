const WeddingPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="wedding-overlay d-flex align-items-center justify-content-center">
      <div className="container px-4"> 
        {/* Container keeps the popup from hitting screen edges on mobile */}
        <div className="wedding-card mx-auto text-center position-relative shadow-lg">
          
          {/* <button onClick={onClose} className="close-x">✕</button> */}

          <h1 className="wedding-title mb-4">
            Accès à L'édition Spéciale
          </h1>

          <div className="wedding-body mb-5">
            <p className="description-text">
              Vous êtes sur le point de consulter l'édition exclusive de <br />
              <strong  >"The Wedding Time"</strong>.
            </p>
            
            <p className="description-text mt-3">
              En cliquant ci-dessous, vous acceptez de découvrir tous les <br className="d-none d-md-block" />
              détails officiels de l'union de <strong>Stéphanie & Mohamed.</strong>
            </p>
          </div>

          <button onClick={onClose} className="btn-gold-action">
            Consulter le journal
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default WeddingPopup;
