import { module, test } from 'qunit';
import { setupRenderingTest } from 'web-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | faxform', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    // Template block usage:
    await render(hbs`
      <Faxform>
        template block text
      </Faxform>
    `);

    assert.dom().containsText('template block text');
  });

  test('it contains a form', async function (assert) {
    await render(hbs`<Faxform />`);
    assert.dom('form').exists();
  });

  test('it contains a name field', async function(assert){
    await render(hbs`<Faxform />`);
    assert.dom('input[name="name"]').exists();
  });

  test('it contains a name label', async function(assert){
    await render(hbs`<Faxform />`);
    assert.dom('label[for="name"]').exists();
  });

  test('it contains a street address field', async function(assert){
    await render(hbs`<Faxform />`);
    assert.dom('input[name="address"]').exists();
  });

  test('it contains a street address label', async function(assert){
    await render(hbs`<Faxform />`);
    assert.dom('label[for="address"]').exists();
  });

  test('it contains a city field', async function(assert){
    await render(hbs`<Faxform />`);
    assert.dom('input[name="city"]').exists();
  });

  test('it contains a city label', async function(assert){
    await render(hbs`<Faxform />`);
    assert.dom('label[for="city"]').exists();
  });

  test('it contains a state dropdown', async function(assert) {
    await render(hbs`<Faxform />`);
    assert.dom('select[name="state"]').exists();
  });

  test('state dropdown has 50 states plus DC and empty option', async function(assert) {
    await render(hbs`<Faxform />`);
    assert.equal(this.element.querySelectorAll('select[name="state"] option').length, 52);
  });

  test('it contains a state label', async function(assert){
    await render(hbs`<Faxform />`);
    assert.dom('label[for="state"]').exists();
  });

  test('it contains a zipcode input', async function(assert) {
    await render(hbs`<Faxform />`);
    assert.dom('input[name="zipcode"]').exists();
  });

  test('it contains a zipcode label', async function(assert){
    await render(hbs`<Faxform />`);
    assert.dom('label[for="zipcode"]').exists();
  });

  test('it contains a representative dropdown', async function(assert) {
    await render(hbs`<Faxform />`);
    assert.dom('select[name="representative"]').exists();
  });

  test('it contains a representative label', async function(assert) {
    await render(hbs`<Faxform />`);
    assert.dom('label[for="representative"]').exists();
  });

  test('it contains a message textarea', async function(assert) {
    await render(hbs`<Faxform />`);
    assert.dom('textarea[name="message"]').exists();
  });

  test('it contains a message label', async function(assert) {
    await render(hbs`<Faxform />`);
    assert.dom('label[for="message"]').exists();
  });

  test('it contains a submit button', async function(assert) {
    await render(hbs`<Faxform />`);
    assert.dom('input[type="submit"]').exists();
  });
});
