class Wrapper {
  constructor(rootId, children = []) {
    this.rootId = rootId;
    this.children = children;
    
    this.init();
  }
  
  init() {
    const root = document.querySelector(this.rootId);

    if(!root) {
      throw Error('Root element not exist');
    }

    this.root = root;

    this.children.forEach(el => {
      if (typeof el.get === 'function') {
        this.root.append(el.get());
      } else {
        console.error('Element does not have a get method:', el);
      }
    });
  }
}

export default Wrapper;