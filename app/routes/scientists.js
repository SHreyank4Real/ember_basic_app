import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return ['Marie curie', 'Mr x', 'Miss y'];
    }
});
