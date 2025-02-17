import type { Schema, Struct } from '@strapi/strapi';

export interface ArticleAuthor extends Struct.ComponentSchema {
  collectionName: 'components_article_authors';
  info: {
    description: '';
    displayName: 'author';
    icon: 'alien';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    introduction: Schema.Attribute.Text;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    social: Schema.Attribute.Component<'general.social-link', true>;
  };
}

export interface ArticleChapter extends Struct.ComponentSchema {
  collectionName: 'components_article_chapters';
  info: {
    description: '';
    displayName: 'chapter';
    icon: 'store';
  };
  attributes: {
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    section: Schema.Attribute.Component<'article.section', true>;
    title: Schema.Attribute.Component<'general.list', false>;
  };
}

export interface ArticleSection extends Struct.ComponentSchema {
  collectionName: 'components_article_sections';
  info: {
    description: '';
    displayName: 'section';
    icon: 'bulletList';
  };
  attributes: {
    content: Schema.Attribute.Component<'general.list', true>;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    title: Schema.Attribute.Component<'general.list', false>;
  };
}

export interface GeneralList extends Struct.ComponentSchema {
  collectionName: 'components_general_lists';
  info: {
    description: '';
    displayName: 'List';
    icon: 'bulletList';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Component<'general.sentence', true>;
  };
}

export interface GeneralParameter extends Struct.ComponentSchema {
  collectionName: 'components_general_parameters';
  info: {
    displayName: 'parameter';
    icon: 'bulletList';
  };
  attributes: {
    character: Schema.Attribute.String & Schema.Attribute.Required;
    counters: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralSentence extends Struct.ComponentSchema {
  collectionName: 'components_general_sentences';
  info: {
    description: '';
    displayName: 'sentence';
    icon: 'bulletList';
  };
  attributes: {
    bold: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    content: Schema.Attribute.Text;
    link: Schema.Attribute.String;
    underline: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface GeneralSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_general_social_links';
  info: {
    displayName: 'social_link';
    icon: 'feather';
  };
  attributes: {
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
  };
}

export interface OrderOrderIntro extends Struct.ComponentSchema {
  collectionName: 'components_order_order_intros';
  info: {
    description: '';
    displayName: 'OrderIntro';
    icon: 'archive';
  };
  attributes: {
    list: Schema.Attribute.Component<'general.list', true>;
    price: Schema.Attribute.Float &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    unit: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OrderQqq extends Struct.ComponentSchema {
  collectionName: 'components_order_qqqs';
  info: {
    description: '';
    displayName: 'OrderIntroSentence';
    icon: 'check';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SocialContactSocialLinkedin extends Struct.ComponentSchema {
  collectionName: 'components_social_contact_social_linkedins';
  info: {
    displayName: 'social_linkedin';
    icon: 'paperPlane';
  };
  attributes: {
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    link: Schema.Attribute.Text;
    LinkedIn: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'LinkedIn'>;
  };
}

export interface SubserviceBenefits extends Struct.ComponentSchema {
  collectionName: 'components_subservice_benefits';
  info: {
    description: '';
    displayName: 'Benefits';
  };
  attributes: {
    Benefit: Schema.Attribute.Component<'subservice.sub-benefit', true>;
    title: Schema.Attribute.Component<'general.list', false>;
  };
}

export interface SubserviceBlogs extends Struct.ComponentSchema {
  collectionName: 'components_subservice_blogs';
  info: {
    description: '';
    displayName: 'Blogs';
    icon: 'apps';
  };
  attributes: {
    Blog: Schema.Attribute.Component<'subservice.sub-blog', true>;
  };
}

export interface SubserviceChoosePackage extends Struct.ComponentSchema {
  collectionName: 'components_subservice_choose_packages';
  info: {
    displayName: 'ChoosePackage';
    icon: 'heart';
  };
  attributes: {
    package: Schema.Attribute.Component<'subservice.package', true>;
  };
}

export interface SubserviceCustomerReviews extends Struct.ComponentSchema {
  collectionName: 'components_subservice_customer_reviews';
  info: {
    description: '';
    displayName: 'CustomerReviews';
    icon: 'crown';
  };
  attributes: {
    counterofreviews: Schema.Attribute.BigInteger &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'1000'>;
    rate: Schema.Attribute.Float &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<4.8>;
    Review: Schema.Attribute.Component<'subservice.review', true>;
    text: Schema.Attribute.Component<'general.list', true>;
    title: Schema.Attribute.Component<'general.list', false>;
  };
}

export interface SubserviceEachSummary extends Struct.ComponentSchema {
  collectionName: 'components_subservice_each_summaries';
  info: {
    description: '';
    displayName: 'EachSummary';
    icon: 'dashboard';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SubserviceFrequentlyQuestions extends Struct.ComponentSchema {
  collectionName: 'components_subservice_frequently_questions';
  info: {
    description: '';
    displayName: 'FrequentlyQuestions';
    icon: 'user';
  };
  attributes: {
    header: Schema.Attribute.Component<'general.list', false>;
    Question: Schema.Attribute.Component<'subservice.question', true> &
      Schema.Attribute.Required;
  };
}

export interface SubserviceGoodPoint extends Struct.ComponentSchema {
  collectionName: 'components_subservice_good_points';
  info: {
    description: '';
    displayName: 'GoodPoint';
    icon: 'apps';
  };
  attributes: {
    chapter: Schema.Attribute.Component<'article.chapter', true>;
  };
}

export interface SubserviceHowToOrder extends Struct.ComponentSchema {
  collectionName: 'components_subservice_how_to_orders';
  info: {
    description: '';
    displayName: 'HowToOrder';
    icon: 'strikeThrough';
  };
  attributes: {
    description: Schema.Attribute.Component<'general.list', false>;
    step: Schema.Attribute.Component<'subservice.how-to-order-step', true>;
    title: Schema.Attribute.Component<'general.list', false>;
  };
}

export interface SubserviceHowToOrderStep extends Struct.ComponentSchema {
  collectionName: 'components_subservice_how_to_order_steps';
  info: {
    description: '';
    displayName: 'HowToOrderStep';
    icon: 'bulletList';
  };
  attributes: {
    detail: Schema.Attribute.Text;
    simple: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SubservicePackage extends Struct.ComponentSchema {
  collectionName: 'components_subservice_packages';
  info: {
    description: '';
    displayName: 'package';
    icon: 'bulletList';
  };
  attributes: {
    level: Schema.Attribute.String;
    list: Schema.Attribute.Component<'general.list', true>;
    popular: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    price: Schema.Attribute.String;
    unit: Schema.Attribute.String;
  };
}

export interface SubserviceQuality extends Struct.ComponentSchema {
  collectionName: 'components_subservice_qualities';
  info: {
    description: '';
    displayName: 'Quality';
    icon: 'briefcase';
  };
  attributes: {
    list: Schema.Attribute.Component<'general.list', true>;
  };
}

export interface SubserviceQuestion extends Struct.ComponentSchema {
  collectionName: 'components_subservice_questions';
  info: {
    description: '';
    displayName: 'Question';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SubserviceReview extends Struct.ComponentSchema {
  collectionName: 'components_subservice_reviews';
  info: {
    description: '';
    displayName: 'review';
    icon: 'paperPlane';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    customer: Schema.Attribute.String & Schema.Attribute.Required;
    date: Schema.Attribute.Date;
    rated: Schema.Attribute.Float &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<5>;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SubserviceServiceSummary extends Struct.ComponentSchema {
  collectionName: 'components_subservice_service_summaries';
  info: {
    description: '';
    displayName: 'ServiceSummary';
    icon: 'car';
  };
  attributes: {
    EachSummary: Schema.Attribute.Component<'subservice.each-summary', true>;
    title: Schema.Attribute.Component<'general.list', false>;
  };
}

export interface SubserviceStateOfService extends Struct.ComponentSchema {
  collectionName: 'components_subservice_state_of_services';
  info: {
    displayName: 'StateOfService';
    icon: 'brush';
  };
  attributes: {
    States: Schema.Attribute.Component<'general.parameter', true>;
  };
}

export interface SubserviceSubBenefit extends Struct.ComponentSchema {
  collectionName: 'components_subservice_sub_benefits';
  info: {
    description: '';
    displayName: 'SubBenefit';
  };
  attributes: {
    Button: Schema.Attribute.String;
    button_api: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    paragraph: Schema.Attribute.Component<'general.list', true>;
    tabname: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.Component<'general.list', false>;
  };
}

export interface SubserviceSubBlog extends Struct.ComponentSchema {
  collectionName: 'components_subservice_sub_blogs';
  info: {
    description: '';
    displayName: 'SubBlog';
    icon: 'feather';
  };
  attributes: {
    button: Schema.Attribute.String;
    button_api: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    paragraph: Schema.Attribute.Component<'general.list', true>;
    title: Schema.Attribute.Component<'general.list', false>;
  };
}

export interface SubserviceSubserviceIntroduction
  extends Struct.ComponentSchema {
  collectionName: 'components_subservice_subservice_introductions';
  info: {
    description: '';
    displayName: 'subserviceIntroduction';
    icon: 'apps';
  };
  attributes: {
    Benefits: Schema.Attribute.Component<'subservice.benefits', false>;
    ChoosePackage: Schema.Attribute.Component<
      'subservice.choose-package',
      false
    >;
    CounterOfReviews: Schema.Attribute.BigInteger &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'1000'>;
    CustomerReviews: Schema.Attribute.Component<
      'subservice.customer-reviews',
      false
    >;
    DownBlogs: Schema.Attribute.Component<'subservice.blogs', false>;
    FrequentlyQuestions: Schema.Attribute.Component<
      'subservice.frequently-questions',
      false
    >;
    GoodPoints: Schema.Attribute.Component<'subservice.good-point', false>;
    HowToOrder: Schema.Attribute.Component<'subservice.how-to-order', false>;
    OrderIntro: Schema.Attribute.Component<'order.order-intro', false> &
      Schema.Attribute.Required;
    Quality: Schema.Attribute.Component<'subservice.quality', false>;
    rated: Schema.Attribute.Float &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<4.8>;
    StateOfService: Schema.Attribute.Component<
      'subservice.state-of-service',
      false
    >;
    Summary: Schema.Attribute.Component<'subservice.service-summary', false>;
    TopReviews: Schema.Attribute.Component<'subservice.top-reviews', false>;
    UpBlogs: Schema.Attribute.Component<'subservice.blogs', false>;
    video: Schema.Attribute.Text;
  };
}

export interface SubserviceTopReviews extends Struct.ComponentSchema {
  collectionName: 'components_subservice_top_reviews';
  info: {
    description: '';
    displayName: 'TopReviews';
    icon: 'cloud';
  };
  attributes: {
    header: Schema.Attribute.Component<'general.list', false>;
    rate: Schema.Attribute.Float &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<5>;
    review: Schema.Attribute.Component<'subservice.review', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'article.author': ArticleAuthor;
      'article.chapter': ArticleChapter;
      'article.section': ArticleSection;
      'general.list': GeneralList;
      'general.parameter': GeneralParameter;
      'general.sentence': GeneralSentence;
      'general.social-link': GeneralSocialLink;
      'order.order-intro': OrderOrderIntro;
      'order.qqq': OrderQqq;
      'social-contact.social-linkedin': SocialContactSocialLinkedin;
      'subservice.benefits': SubserviceBenefits;
      'subservice.blogs': SubserviceBlogs;
      'subservice.choose-package': SubserviceChoosePackage;
      'subservice.customer-reviews': SubserviceCustomerReviews;
      'subservice.each-summary': SubserviceEachSummary;
      'subservice.frequently-questions': SubserviceFrequentlyQuestions;
      'subservice.good-point': SubserviceGoodPoint;
      'subservice.how-to-order': SubserviceHowToOrder;
      'subservice.how-to-order-step': SubserviceHowToOrderStep;
      'subservice.package': SubservicePackage;
      'subservice.quality': SubserviceQuality;
      'subservice.question': SubserviceQuestion;
      'subservice.review': SubserviceReview;
      'subservice.service-summary': SubserviceServiceSummary;
      'subservice.state-of-service': SubserviceStateOfService;
      'subservice.sub-benefit': SubserviceSubBenefit;
      'subservice.sub-blog': SubserviceSubBlog;
      'subservice.subservice-introduction': SubserviceSubserviceIntroduction;
      'subservice.top-reviews': SubserviceTopReviews;
    }
  }
}
