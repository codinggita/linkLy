const Task = require('../models/Task');
const Contact = require('../models/Contact');
const Event = require('../models/Event');

// @desc    Get dashboard aggregates
// @route   GET /api/dashboard
const getDashboard = async (req, res) => {
  try {
    const userId = req.user._id;

    // Task counts
    const totalTasks = await Task.countDocuments({ user: userId });
    const completedTasks = await Task.countDocuments({ user: userId, status: 'completed' });
    const plannedTasks = await Task.countDocuments({ user: userId, status: 'planned' });
    const upcomingTasks = await Task.countDocuments({ user: userId, status: 'upcoming' });

    // Task progress percentage
    const taskProgress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    // Contact counts
    const totalContacts = await Contact.countDocuments({ user: userId });
    const contactsByCategory = await Contact.aggregate([
      { $match: { user: userId } },
      { $group: { _id: '$category', count: { $sum: 1 } } },
    ]);

    // Upcoming events count
    const upcomingEvents = await Event.countDocuments({
      user: userId,
      date: { $gte: new Date() },
    });

    // Recent tasks for task management chart
    const recentTasks = await Task.find({ user: userId })
      .sort({ createdAt: -1 })
      .limit(7)
      .select('title status createdAt tags');

    res.json({
      taskProgress,
      totalTasks,
      completedTasks,
      plannedTasks,
      upcomingTasks,
      totalContacts,
      contactsByCategory,
      upcomingEvents,
      recentTasks,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getDashboard };
