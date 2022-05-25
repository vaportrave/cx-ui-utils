const hasTag = tag => src => !!document.querySelector(`${tag}[src="${src}"]`);

export default hasTag;
