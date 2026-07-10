import {Truck, ShieldCheck, CreditCard, Headphones, RefreshCcw } from 'lucide-react';
import './SideBar.css'



const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-item">
        <div className="sidebar-icon"><Truck size={24} /></div>
      
        <div className="sidebar-text">
          <span className="sidebar-title">Envío rápido</span>
          <span className="sidebar-desc">Despachos en 24h a 48h</span>
        </div>
      </div>
      <div className="sidebar-item">
        <div className="sidebar-icon"><ShieldCheck size={24} /></div>
        <div className="sidebar-text">
          <span className="sidebar-title">Pago seguro</span>
          <span className="sidebar-desc">Transacciones encriptadas</span>
        </div>
      </div>
      <div className='sidebar-item'>
        <div className="sidebar-icon"><CreditCard size={24} /></div>
        <div className="sidebar-text">
          <span className="sidebar-title">Pagos flexibles</span>
          <span className="sidebar-desc">Hasta 12 cuotas sin interés</span>
        </div>
      </div>
      <div className="sidebar-item">
        <div className="sidebar-icon"><RefreshCcw size={24} /></div>
        <div className="sidebar-text">
          <span className="sidebar-title">Garantía</span>
          <span className="sidebar-desc">Devoluciones fáciles</span>
        </div>
      </div>
      <div className="sidebar-item">
        <div className="sidebar-icon"><Headphones size={24} /></div>
        <div className="sidebar-text">
          <span className="sidebar-title">Soporte 24/7</span>
          <span className="sidebar-desc">Te ayudamos en todo momento</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar