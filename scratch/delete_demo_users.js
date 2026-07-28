// delete_demo_users.js
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

// Load environment variables manually from backend/.env (fallback if dotenv not installed)
const envPath = path.resolve('backend', '.env');
const envContent = fs.readFileSync(envPath, { encoding: 'utf8' });
const env = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^\s*([^#=\s]+)\s*=\s*(.*?)\s*$/);
  if (match) env[match[1]] = match[2];
});
const uri = env.MONGODB_URI;
if (!uri) {
  console.error('MONGODB_URI not found in backend/.env');
  process.exit(1);
}

(async () => {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const User = mongoose.model('User', new mongoose.Schema({}, { strict: false }), 'users');
    const demoEmails = [
      'emma.thompson@example.com',
      'olivia.miller@example.com',
      'sophia.davis@example.com',
      'ava.wilson@example.com',
      'isabella.brown@example.com',
      'mia.johnson@example.com',
      'charlotte.williams@example.com',
      'amelia.garcia@example.com',
      'james.anderson@example.com',
      'william.clark@example.com',
      'benjamin.taylor@example.com',
      'lucas.moore@example.com',
      'henry.jackson@example.com',
      'alexander.martin@example.com',
      'daniel.rodriguez@example.com',
    ];
    const result = await User.deleteMany({ email: { $in: demoEmails } });
    console.log('Deleted demo users count:', result.deletedCount);
  } catch (err) {
    console.error('Error during cleanup:', err);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
})();
