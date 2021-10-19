import Component from "../../../js/Component.js";

class BlocText extends Component {
//	setState() { return { n: JSON.parse(localStorage.getItem('n')) || 0 } }
//	setChildComponent() { return [Header]; }
//	addEventListener() { return ['click'] }
//    doSomething(e) {
//		console.log('Event: ' + e )
//		this.state.n++
//		localStorage.setItem('n', JSON.stringify(this.state.n));
//		this.setNewState(this.state)
 //   }
    template({}){
        return `
    <section class="block__text">
        <div class="block__text__960">
            <div class="block__text__960__590">
                <h2>Example Text</h2>
                <p>Use this Text block to tell your course or coaching’s story.</p>
                <p>Write anything from one-liners to detailed paragraphs that tell your visitors more about what you’re
                    selling. </p>
                <p>This block - along with other blocks that contain text content - supports various text formatting
                    such as header sizes, font styles, alignment, ordered and unordered lists, hyperlinks and colors.
                </p>
            <div>
        <div>
    </section>`
    }
}

//let content = new BlocText();
//content.querySelector('.BlocText')
export default BlocText;