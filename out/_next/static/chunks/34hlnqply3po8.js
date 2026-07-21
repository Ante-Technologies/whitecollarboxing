(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,41680,e=>{"use strict";var t=e.i(43476),r=e.i(71645);let s=["White Collar Boxing","Boxing Fitness Classes","Host a Fundraiser","Corporate Event","General Enquiry"];function l({label:e,htmlFor:r,children:s}){return(0,t.jsxs)("label",{htmlFor:r,className:"block",children:[(0,t.jsx)("span",{className:"mb-2 block font-display text-xs font-semibold uppercase tracking-wide text-foreground/80",children:e}),s]})}e.s(["ContactForm",0,function(){let[e,n]=(0,r.useState)(!1);return e?(0,t.jsxs)("div",{className:"flex h-full flex-col items-center justify-center border border-accent bg-surface p-10 text-center",children:[(0,t.jsx)("div",{className:"flex h-14 w-14 items-center justify-center rounded-full bg-accent",children:(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",className:"h-7 w-7 text-white",children:(0,t.jsx)("path",{d:"M5 13l4 4L19 7",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,t.jsx)("h3",{className:"mt-5 font-display text-2xl font-bold text-foreground",children:"Message Sent"}),(0,t.jsx)("p",{className:"mt-2 font-body text-sm text-muted",children:"Thanks for reaching out. Our team will be in touch shortly to get you started."})]}):(0,t.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(!0)},className:"space-y-5",children:[(0,t.jsxs)("div",{className:"grid gap-5 sm:grid-cols-2",children:[(0,t.jsx)(l,{label:"Full Name",htmlFor:"name",children:(0,t.jsx)("input",{id:"name",name:"name",type:"text",required:!0,className:"form-input",placeholder:"Jane Doe"})}),(0,t.jsx)(l,{label:"Email",htmlFor:"email",children:(0,t.jsx)("input",{id:"email",name:"email",type:"email",required:!0,className:"form-input",placeholder:"jane@example.com"})})]}),(0,t.jsxs)("div",{className:"grid gap-5 sm:grid-cols-2",children:[(0,t.jsx)(l,{label:"Phone",htmlFor:"phone",children:(0,t.jsx)("input",{id:"phone",name:"phone",type:"tel",className:"form-input",placeholder:"087 000 0000"})}),(0,t.jsx)(l,{label:"I'm interested in",htmlFor:"interest",children:(0,t.jsxs)("select",{id:"interest",name:"interest",className:"form-input",defaultValue:"",children:[(0,t.jsx)("option",{value:"",disabled:!0,children:"Select an option"}),s.map(e=>(0,t.jsx)("option",{value:e,children:e},e))]})})]}),(0,t.jsx)(l,{label:"Message",htmlFor:"message",children:(0,t.jsx)("textarea",{id:"message",name:"message",rows:5,required:!0,className:"form-input resize-none",placeholder:"Tell us how we can help..."})}),(0,t.jsx)("button",{type:"submit",className:"w-full bg-accent px-6 py-4 font-display text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-hover",children:"Send Message"}),(0,t.jsx)("style",{children:`
        .form-input {
          width: 100%;
          background: var(--background);
          border: 1px solid var(--border);
          padding: 0.75rem 1rem;
          color: var(--foreground);
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .form-input:focus {
          border-color: var(--accent);
        }
        .form-input::placeholder {
          color: var(--muted);
        }
      `})]})}])}]);