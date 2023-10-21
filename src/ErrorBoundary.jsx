import React from "react";

class ErrorBoundary extends React.Component {
   state = { hasError: false };
   
   static getDerivedStateFromError(error) {
    return { hasError: true };
   }

   componentDidCatch(error, info) {
    console.log("Error:", error);
    console.log("Error Info:", info);
   }

   render() {
    if (this.state.hasError) {
        return <div>Error occured in the component.</div>;
    }
    return this.props.children;

    
   }

   
}



export default ErrorBoundary;