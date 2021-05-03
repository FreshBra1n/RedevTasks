let chainMaker = {
    chain: [],
    getLength: function() {
        return this.chain.length
    },
    addLink: function (link) {      
            this.chain.push(link)
            return this

    },
    removeLink: function (ind) {
        this.chain.splice(ind-1, 1)
        return this
    },
     reverseChain: function () {
        this.chain=this.chain.reverse()
        return this
    },
    finishChain: function () {
        return this.chain.delete 
    }
}
console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(1).reverseChain().finishChain())
