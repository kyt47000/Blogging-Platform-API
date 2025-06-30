import mongoose from 'mongoose';
import sequence from 'mongoose-sequence';

const AutoIncrement = sequence(mongoose);
const blogPostSchema = new mongoose.Schema({
  id: Number, // your custom id
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: String,
  tags: [String],
}, { timestamps: true });

// Add the auto-increment plugin
blogPostSchema.plugin(AutoIncrement, { inc_field: 'id' });

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

export default BlogPost;
