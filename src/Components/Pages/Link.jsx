import React from 'react';
            import "./Link.scss";
            import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';
            import { BiCopy } from 'react-icons/bi';
            import {CopyToClipboard} from 'react-copy-to-clipboard';
            
            const Link = () => {
        
              const shareToWhatsApp = () => {
                // Replace with the recipient's WhatsApp number in international format
                const phoneNumber = '919824088870'; // Example: '919876543210' (for India, no '+' or spaces)
                // Define your message
                const message = `Check this out! ${window.location.href}`;
                // Construct the WhatsApp URL
                const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
                // Open the chat in a new tab
                window.open(url, '_blank');
            };
            
            // Call this function when the button is clicked
            shareToWhatsApp();
            
            
          
            
              const shareToInstagram = () => {
                // Instagram does not have a direct URL sharing API, but you can share to Instagram stories or use other methods.
                alert('Instagram sharing is not directly supported.');
              }
            
            
            
              return (
                <div className="shareme">
                  <span onClick={shareToWhatsApp}><WhatsApp /></span>
                  <span onClick={shareToInstagram}><Instagram /></span>
                  <CopyToClipboard text={window.location.href}>
                  <span><BiCopy/></span>
                  </CopyToClipboard>
                </div>
              );
            }
            
            export default Link;
            