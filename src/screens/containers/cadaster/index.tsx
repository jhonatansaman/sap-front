import React from 'react';
import IconMessage from '../../../assets/UIkit/images/ico-message.png';
import Cadaster from '../../components/cadaster';

const menus = [{label: 'Membro do colegiado', icon: IconMessage}];

const CadasterContainer: React.FC = () => <Cadaster routes={menus} />;

export default CadasterContainer;
