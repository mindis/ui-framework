
import React, {
  Component,
  PropTypes,
} from 'react';

import $ from 'jquery';

import classNames from 'classnames';

export default class ModalStack extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.calcDimentions();
  }

  componentDidUpdate() {
    this.calcDimentions();
  }

  /* CSS styles position the stackedModal wrapper components absolutely,
  so we need to use the top-most modal's dimensions as the source of truth
  for the ModalStack's dimensions */
  calcDimentions() {
    const $topModal = $(this.refs.stackedModalDepth1).find('.modal');
    const $stack = $(this.refs.modalStack);
    // Measure
    $topModal.height('auto');
    const modalHeight = $topModal.outerHeight();
    const modalWidth = $topModal.outerWidth();
    $topModal.height('');
    // Set
    $stack
      .outerHeight(modalHeight)
      .outerWidth(modalWidth);
  }

  render() {
    const modalCount = this.props.children.length;
    const stackedModals = this.props.children.map((modal, index) => {
      const depth = modalCount - index;
      const isDepthMax = depth > 3;
      const stackedModalClasses = classNames(
        'stackedModal',
        isDepthMax ? 'stackedModal--depthMax' : `stackedModal--depth${depth}`
      );

      return (
        <div
          className={stackedModalClasses}
          key={index}
          ref={`stackedModalDepth${depth}`}
        >
          {modal}
        </div>
      );
    });

    return (
      <div className="modalStack" ref="modalStack">
        {stackedModals}
      </div>
    );
  }
}

ModalStack.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};