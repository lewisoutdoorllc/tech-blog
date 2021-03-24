const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_text: 'HelloWorld1!',
    user_id: 7
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'HelloWorld2!',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_text: 'HelloWorld3!',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_text: 'HelloWorld4!',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_text: 'HelloWorld5!',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_text: 'HelloWorld6!',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'HelloWorld7!',
    user_id: 1
  }
 
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
