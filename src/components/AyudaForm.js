import React from 'react'

const AyudaForm = (props) => (
  <form>
    <fieldset>
      <legend>Quien Necesita?</legend>
      <div className="field is-grouped">
        <label className="label">Género</label>
        <div className="control">
          <label className="radio">
            <input type="radio" name="genero" value="masculino" />
            Masculino
          </label>
        </div>
        <div className="control">
          <label className="radio">
            <input type="radio" name="genero" value="femenino" />
            Femenino
          </label>
        </div>
      </div>

      <div className="field is-grouped">
        <label className="label">Edad</label>
        <div className="control">
          <label className="radio">
            <input type="radio" name="edad" value="bebe" />
            Bebe
          </label>
        </div>
        <div className="control">
          <label className="radio">
            <input type="radio" name="edad" value="nino" />
            Niño
          </label>
        </div>
        <div className="control">
          <label className="radio">
            <input type="radio" name="edad" value="adolescente" />
            Adolescente
          </label>
        </div>
        <div className="control">
          <label className="radio">
            <input type="radio" name="edad" value="Adulto" />
            Adulto
          </label>
        </div>
      </div>


      <div className="field is-grouped">
        <label className="label">Cotextura</label>
        <div className="control">
          <label className="radio">
            <input type="radio" name="contx" value="chica" />
            Chica
          </label>
        </div>
        <div className="control">
          <label className="radio">
            <input type="radio" name="contx" value="mediana" />
            Mediana
          </label>
        </div>
        <div className="control">
          <label className="radio">
            <input type="radio" name="contx" value="robusta" />
            Robusta
          </label>
        </div>
      </div>

    </fieldset>
    <fieldset>
      <legend>Que Necesita?</legend>
      <div className="field">
        <h2>ROPA</h2>
        <p className="control">
          <label className="checkbox">
            <input type="checkbox" name="ropa-buzo" value="1"/>
            Buzo
          </label>
          <label className="checkbox">
            <input type="checkbox" name="ropa-vestido" value="1"/>
            Vestido
          </label>
          <label className="checkbox">
            <input type="checkbox" name="ropa-remera" value="1"/>
            Remera
          </label>
          <label className="checkbox">
            <input type="checkbox" name="ropa-pantalon" value="1"/>
            Pantalon
          </label>
          <label className="checkbox">
            <input type="checkbox" name="ropa-guantes" value="1"/>
            Guantes
          </label>
          <label className="checkbox">
            <input type="checkbox" name="ropa-gorro" value="1"/>
            Gorro
          </label>
          <label className="checkbox">
            <input type="checkbox" name="ropa-medias" value="1"/>
            Medias
          </label>
        </p>
      </div>
      <div className="field">
        <h2>COMIDA</h2>
        <p className="control">
          <label className="checkbox">
            <input type="checkbox" name="comida-per" value="1"/>
            Perecedero
          </label>
          <label className="checkbox">
            <input type="checkbox" name="comida-noper" value="1"/>
            No Perecedero
          </label>
          <label className="checkbox">
            <input type="checkbox" name="comida-bebida-caliente" value="1"/>
            Bebida caliente
          </label>
          <label className="checkbox">
            <input type="checkbox" name="comida-bebida-fria" value="1"/>
            Bebida Fría
          </label>
        </p>
      </div>

      <div className="field">
        <h2>CAMA</h2>
        <p className="control">
          <label className="checkbox">
            <input type="checkbox" name="cama-colchon" value="1"/>
            Colchón
          </label>
          <label className="checkbox">
            <input type="checkbox" name="cama-manta" value="1"/>
            Manta
          </label>
          <label className="checkbox">
            <input type="checkbox" name="cama-almohada" value="1"/>
            Almohada
          </label>
          <label className="checkbox">
            <input type="checkbox" name="cama-carpa" value="1"/>
            Carpa
          </label>
        </p>
      </div>

    </fieldset>
    <button
      type="button"
      onClick={props.handleSubmit}
    >GO</button>
  </form>
)

export default AyudaForm
