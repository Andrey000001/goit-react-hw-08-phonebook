import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './LinkButton.css';
const LinkButton = ({
  children,
  disabled,
  onClick,
  active,
  className,
  ...attrs
}) => {
  console.log(attrs);
  const Tag = attrs.to ? Link : 'button';
  const classes = classNames('btn', className, { active });
  return (
    <Tag className={classes} disabled={disabled} onClick={onClick} {...attrs}>
      {children}
    </Tag>
  );
};

LinkButton.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  active: PropTypes.bool,
};
LinkButton.defaultProps = {
  children: 'Default button',
  onClick: () => {},
  className: '',
  disabled: false,
  active: false,
};
export default LinkButton;
