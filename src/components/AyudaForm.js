import React from 'react'

const AyudaForm = () => (
  <form>
    <fieldset className="column is-9">
      <legend>QUIEN NECESITA?</legend>
      <div className="field is-grouped">
        <label className="label">&nbsp;Género &nbsp;</label>
        <div className="control">
          <label className="radio">
            <input type="radio" name="genero" value="masculino" />
            &nbsp;Masculino&nbsp;
          </label>
        </div>
        <div className="control">
          <label className="radio">
            <input type="radio" name="genero" value="femenino" />
            &nbsp;Femenino&nbsp;
          </label>
        </div>
      </div>

      <div className="field is-grouped">
        <label className="label">&nbsp;Edad&nbsp;</label>
        <div className="control">
          <label className="radio">
            <input type="radio" name="edad" value="bebe" />
            &nbsp;Bebe&nbsp;
          </label>
        </div>
        <div className="control">
          <label className="radio">
            <input type="radio" name="edad" value="nino" />
            &nbsp;Niño&nbsp;
          </label>
        </div>
        <div className="control">
          <label className="radio">
            <input type="radio" name="edad" value="adolescente" />
            &nbsp;Adolescente&nbsp;
          </label>
        </div>
        <div className="control">
          <label className="radio">
            <input type="radio" name="edad" value="Adulto" />
            &nbsp;Adulto&nbsp;
          </label>
        </div>
      </div>


      <div className="field is-grouped">
        <label className="label">&nbsp;Cotextura&nbsp;</label>
        <div className="control">
          <label className="radio">
            <input type="radio" name="contx" value="chica" />
            &nbsp;Chica&nbsp;
          </label>
        </div>
        <div className="control">
          <label className="radio">
            <input type="radio" name="contx" value="mediana" />
            &nbsp;Mediana&nbsp;
          </label>
        </div>
        <div className="control">
          <label className="radio">
            <input type="radio" name="contx" value="robusta" />
            &nbsp;Robusta&nbsp;
          </label>
        </div>
      </div>

    </fieldset>
    <fieldset className="column is-9">
      <legend>QUE NECESITA?</legend>
      <div className="field">
        <p className="control">
          <h2 className="label">&nbsp;ROPA&nbsp;</h2>
          <label class="checkbox">
            <input type="checkbox" name="ropa-buzo" value="1"/>
            &nbsp;Buzo&nbsp;
          </label>
          <label class="checkbox">
            <input type="checkbox" name="ropa-vestido" value="1"/>
            &nbsp;Vestido&nbsp;
          </label>
          <label class="checkbox">
            <input type="checkbox" name="ropa-remera" value="1"/>
            &nbsp;Remera&nbsp;
          </label>
          <label class="checkbox">
            <input type="checkbox" name="ropa-pantalon" value="1"/>
            &nbsp;Pantalon&nbsp;
          </label>
		  <br/>
          <label class="checkbox">
            <input type="checkbox" name="ropa-guantes" value="1"/>
            &nbsp;Guantes&nbsp;
          </label>
          <label class="checkbox">
            <input type="checkbox" name="ropa-gorro" value="1"/>
            &nbsp;Gorro&nbsp;
          </label>
          <label class="checkbox">
            <input type="checkbox" name="ropa-medias" value="1"/>
            &nbsp;Medias&nbsp;
          </label>
        </p>
      </div>
      <div className="field">
        <h2 className="label">&nbsp;COMIDA&nbsp;</h2>
        <p className="control">
          <label class="checkbox">
            <input type="checkbox" name="comida-per" value="1"/>
            &nbsp;Perecedero&nbsp;
          </label>
          <label class="checkbox">
            <input type="checkbox" name="comida-noper" value="1"/>
            &nbsp;No Perecedero&nbsp;
          </label>
		  <br/>
          <label class="checkbox">
            <input type="checkbox" name="comida-bebida-caliente" value="1"/>
            &nbsp;Bebida caliente&nbsp;
          </label>
          <label class="checkbox">
            <input type="checkbox" name="comida-bebida-fria" value="1"/>
            &nbsp;Bebida Fría&nbsp;
          </label>
        </p>
      </div>

      <div className="field">
        <h2 className="label">&nbsp;CAMA&nbsp;</h2>
        <p className="control">
          <label class="checkbox">
            <input type="checkbox" name="cama-colchon" value="1"/>
            &nbsp;Colchón&nbsp;
          </label>
          <label class="checkbox">
            <input type="checkbox" name="cama-manta" value="1"/>
            &nbsp;Manta&nbsp;
          </label>
          <label class="checkbox">
            <input type="checkbox" name="cama-almohada" value="1"/>
            &nbsp;Almohada&nbsp;
          </label>
          <label class="checkbox">
            <input type="checkbox" name="cama-carpa" value="1"/>
            &nbsp;Carpa&nbsp;
          </label>
        </p>
      </div>

    </fieldset>
    <button className="button is-primary is-large is-warning" type="submit">GO</button>
  </form>
)

export default AyudaForm
