import React from 'react';
import PropTypes from 'prop-types';
import { types as CardType } from 'credit-card-type';
import S3Image from '../../../../../../components/S3Image';

const cardIsOfType = (number, type) => creditCardType(number).filter(card => card.type === type).length > 0

const CreditCardTypeDisplay = ({ cardType }) => (
<div className="credit-card-type-display pt32 span-6 span-last span-last-clear@md span-12@md">
  <span className="dib tac span-3">
    <S3Image
      className={`${cardType.reduce((p, { type }) => p || type == CardType.VISA, false) ? 'op1' : 'op.2'}`}
      fileName="/images/CreditCardTypeDisplay/visa.png"
      asset={true}
    />
  </span>
  <span className="dib tac span-3">
    <S3Image
      className={`${cardType.reduce((p, { type }) => p || type == CardType.MASTERCARD, false) ? 'op1' : 'op.2'}`}
      fileName="/images/CreditCardTypeDisplay/mastercard.png"
      asset={true}
    />
  </span>
  <span className="dib tac span-3">
    <S3Image
      className={`${cardType.reduce((p, { type }) => p || type == CardType.DISCOVER, false) ? 'op1' : 'op.2'}`}
      fileName="/images/CreditCardTypeDisplay/discover.png"
      asset={true}
    />
  </span>
  <span className="dib tac span-3 span-last">
    <S3Image
      className={`${cardType.reduce((p, { type }) => p || type == CardType.AMERICAN_EXPRESS, false) ? 'op1' : 'op.2'}`}
      fileName="/images/CreditCardTypeDisplay/amex.png"
      asset={true}
    />
  </span>
</div>
)

CreditCardTypeDisplay.propTypes = {
  cardType: PropTypes.array.isRequired,
};

export default CreditCardTypeDisplay;
